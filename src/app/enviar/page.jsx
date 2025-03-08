export default function Home() {

    const handleButtonClick = () => {
      console.log("Botão clicado!");
    };
  
    return (
      <div>
        
        <h1>Laboratório</h1>
        
        <button
          onClick={handleButtonClick}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Clique aqui
        </button>
  
      </div>
    );
  }
  