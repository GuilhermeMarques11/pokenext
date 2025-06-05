// Exibe o loading apenas no componente que faz a requisição
export default function Loading() {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce"></div>
      <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce [animation-delay:-0.6s]"></div>
    </div>
  );
}
