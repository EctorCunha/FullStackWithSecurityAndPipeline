import '../../pages/ListPage/listPage.css'


export function Pagination( props : any) {
    const {pages, setCurrentPage} = props;


  return (
    <div className="pagesContainer">
      <div className="pages">
        {
            Array.from(Array(pages), (item, index)=>{
                return <button 
                key={index} 
                className="btnPages" 
                value={index} 
                onClick={(e:any)=> setCurrentPage(Number(e.target.value))}
                >
                    {index+1}
                    </button>
            })
        }
      </div>
    </div>
  );
}
