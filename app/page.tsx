import { Homepage } from "./components";

export default function Home() {
  return (<div className="flex flex-col min-h-screen">  
      <main className="flex-grow h-screen">
        <Homepage />
      </main>
    </div>
  );
}
