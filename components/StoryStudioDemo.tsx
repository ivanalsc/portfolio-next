"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { studioScenes, studioStory, studioVoices } from "@/data/storyStudio";

type Version = { id: number; label: string; image: string };

export function StoryStudioDemo() {
  const [scenes, setScenes] = useState(studioScenes);
  const [selectedId, setSelectedId] = useState(3);
  const [voice, setVoice] = useState("warm");
  const [imageState, setImageState] = useState<"idle"|"generating"|"success"|"error">("idle");
  const [voiceState, setVoiceState] = useState<"idle"|"previewing"|"generating"|"ready">("idle");
  const [versions, setVersions] = useState<Record<number,Version[]>>({3:[{id:1,label:"Original",image:"/story-studio/scene-original.svg"}]});
  const [activeVersion, setActiveVersion] = useState<Record<number,number>>({3:1});
  const exportDialog = useRef<HTMLDialogElement>(null);
  const previewDialog = useRef<HTMLDialogElement>(null);
  const scene = scenes.find(item=>item.id===selectedId)!;
  const sceneVersions = versions[selectedId] ?? [{id:1,label:"Original",image:"/story-studio/scene-original.svg"}];
  const currentVersion = sceneVersions.find(item=>item.id===(activeVersion[selectedId]??1)) ?? sceneVersions[0];

  function updateScene(field:"narration"|"prompt", value:string){setScenes(items=>items.map(item=>item.id===selectedId?{...item,[field]:value}:item));if(field==="prompt"&&value.trim())setImageState("idle")}
  function generateImage(){
    if(!scene.prompt.trim()){setImageState("error");return}
    setImageState("generating");
    window.setTimeout(()=>{const nextId=(versions[selectedId]?.length??1)+1;const version={id:nextId,label:`Version ${String(nextId).padStart(2,"0")}`,image:nextId%2===0?"/story-studio/scene-generated.svg":"/story-studio/scene-original.svg"};setVersions(current=>({...current,[selectedId]:[version,...(current[selectedId]??[{id:1,label:"Original",image:"/story-studio/scene-original.svg"}])]}));setActiveVersion(current=>({...current,[selectedId]:nextId}));setImageState("success")},1400);
  }
  function simulateVoice(kind:"previewing"|"generating"){setVoiceState(kind);window.setTimeout(()=>setVoiceState("ready"),kind==="previewing"?1200:1600)}

  return <main className="studio-app">
    <header className="studio-header"><Link href="/work/story-studio" className="mono">← Case study</Link><div><b>Story Studio</b><span>{studioStory.title}</span></div><nav><button type="button" onClick={()=>previewDialog.current?.showModal()}>Preview</button><button type="button" onClick={()=>exportDialog.current?.showModal()}>Export</button></nav></header>
    <div className="studio-layout">
      <aside className="scene-panel"><div><span className="mono">Story / 01</span><h1>{studioStory.title}</h1><p>{studioStory.premise}</p></div><nav aria-label="Story scenes">{scenes.map(item=><button type="button" className={selectedId===item.id?"active":""} aria-current={selectedId===item.id?"step":undefined} onClick={()=>{setSelectedId(item.id);setImageState("idle");setVoiceState("idle")}} key={item.id}><span className="mono">0{item.id}</span><b>{item.title}</b><small className="mono">{item.duration} · {item.status}</small></button>)}</nav></aside>
      <section className="scene-editor" aria-labelledby="scene-title"><header><div><span className="mono">Scene {String(scene.id).padStart(2,"0")} / {scene.duration}</span><h2 id="scene-title">{scene.title}</h2></div><span className={`studio-status status-${scene.status} mono`}>{scene.status}</span></header>
        <section className="editor-block narration-block"><label htmlFor="narration"><span className="mono">Narration</span><small>Editable story text</small></label><textarea id="narration" value={scene.narration} onChange={event=>updateScene("narration",event.target.value)} rows={5}/></section>
        <section className="editor-block visual-block"><div className="block-label"><div><span className="mono">Visual</span><small>Generated locally from predefined assets</small></div><span className="mono" aria-live="polite">{imageState==="generating"?"Generating…":imageState==="success"?"New version ready ✓":imageState==="error"?"Prompt required !":"Ready"}</span></div><div className={`studio-media ${imageState==="generating"?"generating":""}`}><Image src={currentVersion.image} alt={`Visual for scene ${scene.id}: ${scene.title}`} fill sizes="(max-width: 900px) 100vw, 55vw" priority/>{imageState==="generating"&&<div className="generation-overlay"><i/><span className="mono">Composing scene…</span></div>}</div><label htmlFor="visual-prompt" className="field-label mono">Visual prompt</label><textarea id="visual-prompt" value={scene.prompt} onChange={event=>updateScene("prompt",event.target.value)} rows={3} aria-invalid={imageState==="error"}/>{imageState==="error"&&<p className="field-error" role="alert">Add a visual prompt before generating an image.</p>}<div className="editor-actions"><button type="button" className="primary-action" onClick={generateImage} disabled={imageState==="generating"}>{imageState==="generating"?"Generating image…":"Generate image"}</button><span className="mono">No API call · Local simulation</span></div>
          <div className="version-history"><span className="mono">Version history</span><div>{sceneVersions.map((version,index)=><button type="button" className={(activeVersion[selectedId]??1)===version.id?"active":""} onClick={()=>setActiveVersion(current=>({...current,[selectedId]:version.id}))} key={version.id}><b>{version.label}</b><small>{index===0&&sceneVersions.length>1?"Current":version.id===1?"Original":"Previous"}</small></button>)}</div></div>
        </section>
        <section className="editor-block voice-block"><div className="block-label"><div><span className="mono">Voice</span><small>Simulated playback and generation</small></div><span className="mono" aria-live="polite">{voiceState==="previewing"?"Previewing…":voiceState==="generating"?"Generating…":voiceState==="ready"?"Voice ready ✓":"Idle"}</span></div><fieldset><legend className="sr-only">Choose a voice</legend>{studioVoices.map(option=><label className={voice===option.id?"selected":""} key={option.id}><input type="radio" name="voice" value={option.id} checked={voice===option.id} onChange={()=>{setVoice(option.id);setVoiceState("idle")}}/><span><b>{option.name}</b><small className="mono">{option.detail}</small></span></label>)}</fieldset><div className="editor-actions"><button type="button" onClick={()=>simulateVoice("previewing")} disabled={voiceState==="previewing"||voiceState==="generating"}>▷ Preview voice</button><button type="button" className="primary-action" onClick={()=>simulateVoice("generating")} disabled={voiceState==="previewing"||voiceState==="generating"}>{voiceState==="generating"?"Generating voice…":"Generate voice"}</button></div></section>
      </section>
    </div>
    <dialog ref={previewDialog} className="studio-dialog"><form method="dialog"><header><div><span className="mono">Story preview</span><h2>{scene.title}</h2></div><button aria-label="Close preview">Close ×</button></header><Image src={currentVersion.image} alt={`Preview of ${scene.title}`} width={1200} height={720}/><p>{scene.narration}</p><button className="primary-action">Done</button></form></dialog>
    <dialog ref={exportDialog} className="studio-dialog export-dialog"><form method="dialog"><header><div><span className="mono">Mock action</span><h2>Export story</h2></div><button aria-label="Close export dialog">Close ×</button></header><p>A complete product could export the story as video, audio or a scene package. Export is intentionally simulated in this prototype.</p><div className="mock-export-options mono"><span>Video · MP4</span><span>Audio · WAV</span><span>Scenes · ZIP</span></div><button className="primary-action">Close</button></form></dialog>
  </main>;
}
