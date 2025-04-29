import { Lock, User, Sparkles } from "lucide-react";

export default function CompassDiagram() {
  // Arrow component that can be reused with different positions and rotations
  const Arrow = ({ x, y, rotation, color }: { x: string, y: string, rotation: string, color: string }) => (
    <g transform={`translate(${x}, ${y}) rotate(${rotation})`}>
      
      <path d="M0,-10 L-5,-5 L0,-15 L5,-5 Z" fill={color} />
    </g>
  );

  return (
    <div className="w-full max-w-2xl mx-auto my-12 relative">
      <div className="aspect-square w-full relative">
        
        {/* Provider icons at the top outside the circle */}
        <div className="absolute top-[5%] left-1/3 flex flex-col items-center z-10">
          <div className="w-16 h-16 flex items-center justify-center bg-white rounded-lg shadow-sm p-2">
            <img
              src="./images/providers/google.png"
              alt="Google logo"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <span className="mt-2 text-gray-700 dark:text-gray-300 text-sm font-medium">
            Google
          </span>
        </div>
        
        <div className="absolute top-[0%] left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
          <div className="w-16 h-16 flex items-center justify-center bg-white rounded-lg shadow-sm p-2">
            <img
              src="./images/providers/openai.png"
              alt="OpenAI logo"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <span className="mt-2 text-gray-700 dark:text-gray-300 text-sm font-medium">
            OpenAI
          </span>
        </div>
        
        <div className="absolute top-[5%] right-1/3 flex flex-col items-center z-10">
          <div className="w-16 h-16 flex items-center justify-center bg-white rounded-lg shadow-sm p-2">
            <img
              src="./images/providers/anthropic.jpeg"
              alt="Anthropic logo"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <span className="mt-2 text-gray-700 dark:text-gray-300 text-sm font-medium">
            Anthropic
          </span>
        </div>
        
        {/* Dotted circle container */}
        <div className="absolute top-[30%] bottom-[35%] left-[15%] right-[15%] rounded-full border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center">
          
          {/* Lock icon embedded in the circle border (top) */}
          <div className="absolute top-[10%] -left-[2%] bg-gray-50 dark:bg-gray-900 p-2 rounded-full">
            <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full">
              <Lock className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            </div>
          </div>
          
          
          {/* Polaris diamond in the center with rounded corners */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 p-8 flex items-center justify-center" style={{ borderRadius: '15%', width: '100px', height: '100px' }}>
            <svg className="absolute" width="100" height="100" overflow="visible" style={{ top: "0px", left: "0px" }}>
                    <defs>
                    <linearGradient id="centerGradient" x1="100%" y1="0%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="#f59e0b" />
                    </linearGradient>
                    </defs>
                    <path d="M0,0 L-90,-90" stroke="url(#centerGradient)" strokeWidth="2" fill="#f59e0b" strokeDasharray="4 2" />
                    <path d="M0,0 L-120,-30" stroke="url(#centerGradient)" strokeWidth="2" fill="#f59e0b" strokeDasharray="4 2" />
                    <path d="M0,0 L-30,-120" stroke="url(#centerGradient)" strokeWidth="2" fill="#f59e0b" strokeDasharray="4 2" />
                    <Arrow x="-83" y="-83" rotation="-45" color="#f59e0b" />
                    <Arrow x="-110" y="-26" rotation="-65" color="#f59e0b" />
                    <Arrow x="-26" y="-110" rotation="-25" color="#f59e0b" />
            </svg>
            <div className="rotate-[-45deg] text-emerald-500 font-bold text-xl flex flex-col items-center">
              <div className="text-emerald-500 mb-1">
              <img
                src="https://github.com/nordwestt/compass/blob/master/assets/compass.png?raw=true"
                alt="Compass Logo"
                className="h-16 mb-2"
              />
              </div>
              Compass
            </div>
          </div>
          
          
          
          {/* Ollama provider with arrow from Polaris */}
          <div className="absolute top-1/2 right-[15%] -translate-y-1/2 flex flex-col items-center">
            <div className="relative">
                <svg className="absolute" width="100" height="100" overflow="visible" style={{top:"30px",left:"-35px"}}>
                <Arrow x="-20" y="0" rotation="90" color="#10b981" />
                <path d="M-10,0 L-70,0" stroke="#10b981" strokeWidth="2" fill="none" />
                </svg>
            </div>
            <div className="w-16 h-16 flex items-center justify-center bg-white rounded-lg shadow-sm p-2">
              <img
                src="./images/providers/ollama.png"
                alt="Ollama logo"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <span className="mt-2 text-gray-700 dark:text-gray-300 text-sm font-medium">
              Ollama AI
            </span>
          </div>
        </div>
        
      </div>
    </div>
  );
} 