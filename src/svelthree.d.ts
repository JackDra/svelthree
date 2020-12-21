export { default as PerspectiveCamera } from "./components/PerspectiveCamera.svelte"
export { default as OrthographicCamera } from "./components/OrthographicCamera.svelte"
export { default as Mesh } from "./components/Mesh.svelte"
export { default as Empty } from "./components/Empty.svelte"
export { default as Canvas } from "./components/Canvas.svelte"
export { default as DirectionalLight } from "./components/DirectionalLight.svelte"
export { default as SpotLight } from "./components/SpotLight.svelte"
export { default as RectAreaLight } from "./components/RectAreaLight.svelte"
export { default as AmbientLight } from "./components/AmbientLight.svelte"
export { default as HemisphereLight } from "./components/HemisphereLight.svelte"
export { default as PointLight } from "./components/PointLight.svelte"
export { default as Scene } from "./components/Scene.svelte"
export { default as LoadedGLTF } from "./components/LoadedGLTF.svelte"
export { default as WebGLRenderer } from "./components/WebGLRenderer.svelte"
export { default as OrbitControls } from "./components/OrbitControls.svelte"
export { default as SessionAR } from "./components/SessionAR.svelte"
export { default as SessionVR } from "./components/SessionVR.svelte"
export { default as CubeCamera } from "./components/CubeCamera.svelte"
export { default as XRHandJointIndices } from "./utils/XRHandJointIndices"
export * from "./utils/Overridden"
export { svelthreeStores } from "./stores.js"

export * from "svelthree-three"
//import * as THREE from "svelthree-three"
//export { THREE }

// TODO  does this makes sense / Does it have any negative impact on treeshaking / bundling?
export as namespace SVELTHREE
