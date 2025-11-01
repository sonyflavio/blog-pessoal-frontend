function DeletarTema() {
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4x1 text-center my-4'>Deletar tema</h1>
            <p className='text-center font-sembold mb-4'>
                Você tem certeza de que deseja apagar esse tema?
            </p>
            
            <div className=' flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2x1'>
                    Tema
                </header>
                <p className='p-8 text-3x1 bg-slate-200 h-full'>tema</p>
                
                <div className='flex'>
                    <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'>
                        Não
                    </button>
                    <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center'>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarTema;