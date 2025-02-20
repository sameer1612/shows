"use client";
import { Button } from "primereact/button";

export default function Home() {
  function sayHello() {
    alert("Hello");
  }

  return (
    <main className="text-center mt-20">
      <Button size="small" label="Click me" onClick={sayHello} />
    </main>
  );
}
