import './category.scss';
import {Link} from 'react-router-dom';
import basketball from '@imgCate/basketball/Nike G.T. Jump 2 EP.webp'
import jordan from '@imgCate/jordan/air-jordan-1-mid-se-craft-shoes-n5bFMW.jpeg'
import football from '@imgCate/football/Nike Phantom GX Club.webp'
import lifestyle from '@imgCate/lifestyle/air-jordan-1-low-flyease-easy-on-off-shoes-SsT4HK.jpeg'
import running from '@imgCate/running/Nike InfinityRN 4.webp'

export default function Category() {
    return (
        <>
            <h3>Nike for Men</h3>
            <div className='category_container' id='category'>
                <Link to="category/football" className='category_item'>
                    <img src={football} alt="football"/>
                    <p>Men/Football</p>
                </Link>
                <Link to="category/jordan" className='category_item'>
                    <img src={jordan} alt="jordan"/>
                    <p>Men/Jordan</p>
                </Link>
                <Link to="category/lifestyle" className='category_item'>
                    <img src={lifestyle} alt="lifestyle"/>
                    <p>Men/Lifestyle</p>
                </Link>
                <Link to="category/running" className='category_item'>
                    <img src={running} alt="running"/>
                    <p>Men/Running</p>
                </Link>
                <Link to="category/basketball" className='category_item'>
                    <img src={basketball} alt="basketball"/>
                    <p>Men/Basketball</p>
                </Link>
            </div>
        </>
    )
}
