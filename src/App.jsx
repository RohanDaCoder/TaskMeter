import { Folder } from 'lucide-react';

function App() {
  return (
    <>
      <h1 className="pt-5 text-center font-mono text-6xl font-bold text-white">
        <span className="inline-flex items-center justify-center gap-3">
          TaskMeter <Folder size={60} />
        </span>
      </h1>

      <div className="mx-100 my-10 rounded-md border-white bg-white p-40 text-center text-2xl font-bold shadow-md shadow-black transition-colors delay-50 hover:bg-slate-400">
        <p>Tasks</p>
      </div>
    </>
  );
}

export default App;
