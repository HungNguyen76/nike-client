import './newItem.scss';
import {convertToUSD} from '@mieuteacher/meomeojs';
import basketball from '@imgCate/basketball/Nike G.T. Jump 2 EP.webp'
import jordan from '@imgCate/jordan/air-jordan-1-mid-se-craft-shoes-n5bFMW.jpeg'
import football from '@imgCate/football/Nike Phantom GX Club.webp'
import lifestyle from '@imgCate/lifestyle/air-jordan-1-low-flyease-easy-on-off-shoes-SsT4HK.jpeg'
import running from '@imgCate/running/Nike InfinityRN 4.webp'

export default function NewItem() {
    return (
        <>
            <h3>Trending</h3>
            <div className='newItem_container'>
                <div className='item_detail'>
                    <img src={running} alt="running"/>
                    <div className='item_infor'>
                        <h5>Nike InfinityRN 4</h5>
                        <p>{convertToUSD(249.95)}</p>
                    </div>
                </div>
                <div className='item_detail'>
                    <img src={basketball} alt="basketball"/>
                    <div className='item_infor'>
                        <h5>Nike G.T. Jump 2 EP</h5>
                        <p>{convertToUSD(169.95)}</p>
                    </div>
                </div>
                <div className='item_detail'>
                    <img src={football} alt="football"/>
                    <div className='item_infor'>
                        <h5>Nike Phantom GX</h5>
                        <p>{convertToUSD(250.95)}</p>
                    </div>
                </div>
                <div className='item_detail'>
                    <img src={jordan} alt="jordan"/>
                    <div className='item_infor'>
                        <h5>Air Jordan 1 High</h5>
                        <p>{convertToUSD(300.95)}</p>
                    </div>
                </div>
                <div className='item_detail'>
                    <img src={lifestyle} alt="lifestyle"/>
                    <div className='item_infor'>
                        <h5>Air Jordan 1 Low</h5>
                        <p>{convertToUSD(149.95)}</p>
                    </div>
                </div>
            </div>
        </>)
}
