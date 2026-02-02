import './Mainbody.css'
import Movie from './Movie'
function MainBody ()
{
    return(
        <div>
            <h1>Movies</h1>
            <div className='movies'>
                <Movie title='KGF' year='2021' imgLink='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJQrBoH8kC1vhuz05hOHs-dRltR7jFFJ2vrw&s'/>
                <Movie title='Saaho' year='2022' imgLink='https://static.toiimg.com/thumb/msid-70628246,imgsize-100855,width-400,resizemode-4/70628246.jpg'/>
                <Movie title='Pushpa' year='2023' imgLink='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_kgTfx98m6ZO1YLl_u6eUDk_dOWYBXlnY9A&s'/>
                <Movie title='kantara' year='2024' imgLink='https://upload.wikimedia.org/wikipedia/en/8/84/Kantara_poster.jpeg'/>
                <Movie title='Devara' year='2025' imgLink='https://m.media-amazon.com/images/M/MV5BNWY4NDgyN2QtNDRkZS00OGRjLWFhN2UtODc3Mzk2ZjQ0ZjhkXkEyXkFqcGc@._V1_.jpg'/>
                <Movie title='Vikram' year='2026' imgLink='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdpgESurbV4TfouGlbyrow8qC2CGwwL-Tk7A&s '/>
            </div>
        </div>
    )
}
export default MainBody