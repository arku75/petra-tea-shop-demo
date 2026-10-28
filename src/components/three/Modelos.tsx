"use client";
// LOS MODELOS DE LA FÁBRICA BLENDER (API bpy 5.1.2): cuchara tallada, tetera, taza, tarro,
// bandeja servida y cucharas variadas (los 2 últimos, integrados en escenas tras la
// revisión del 19-ago). Se cargan de /public/modelos/*.glb con fallback silencioso.
import { Suspense, type ComponentProps } from "react";
import { useGLTF, Clone } from "@react-three/drei";
import { assetPath } from "@/lib/demo";

function GLBInner({ url, ...props }: { url: string } & Omit<ComponentProps<"group">, "ref">) {
  const { scene } = useGLTF(assetPath(url));
  return <Clone object={scene} {...props} castShadow receiveShadow />;
}

export default function GLB({ fallback = null, ...props }: { url: string; fallback?: React.ReactNode } & Omit<ComponentProps<"group">, "ref">) {
  return (
    <Suspense fallback={fallback}>
      <GLBInner {...props} />
    </Suspense>
  );
}

useGLTF.preload(assetPath("/modelos/cuchara.glb"));
useGLTF.preload(assetPath("/modelos/tetera.glb"));
useGLTF.preload(assetPath("/modelos/taza.glb"));
useGLTF.preload(assetPath("/modelos/tarro.glb"));
useGLTF.preload(assetPath("/modelos/bandeja_servida.glb"));
useGLTF.preload(assetPath("/modelos/cucharas_variadas.glb"));
