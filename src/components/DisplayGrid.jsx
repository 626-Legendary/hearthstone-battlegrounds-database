import React from 'react'
import HeroCard from './HeroCard'
import MinionCard from "./MinionCard"
import heroesData from '../data/battlegrounds_heroes.json'
import cardsData from '../data/battlegrounds_cards.json'
import './DisplayGrid.css'
import titleMiddleBg from '../assets/titleMiddleBG.png'

const DisplayGrid = () => {

    return (
        <div>
            <div className='titleMiddleBG'>
                <img src={titleMiddleBg}
                    className='titleMiddleIMG'
                    alt="" />
                <div className='titleMiddleContent'>
                    英雄
                </div>
            </div>




            <div className="display-grid">



                {heroesData.heroes.map(hero => (
                    // id,name, armor,heroImage,heroPowerText, heroPowerImage
                    <HeroCard
                        key={hero.id}
                        id={hero.id}
                        name={hero.name.zh_CN}
                        armor={hero.armor}
                        heroImage={hero.hero_image.zh_CN}
                        heroPowerText={hero.hero_power_text.zh_CN}
                        heroPowerImage={hero.hero_power_image.zh_CN}

                    />
                ))}

            </div>

            <div className='titleMiddleBG'>
                <img src={titleMiddleBg}
                    className='titleMiddleIMG'
                    alt="" />
                <div className='titleMiddleContent'>
                    随从
                </div>
            </div>

            {/* //id,name,classId,tier,powerText,cardImage */}
            <div className="display-grid">
                {cardsData.cards.map(card => (
                    
                    <MinionCard
                        key={card.id}
                        id={card.id}
                        name={card.name.zh_CN}
                        classId={card.classId}
                        tier={card.tier}
                        powerText={card.power_text.zh_CN}
                        cardImage={card.card_image.zh_CN}

                    />
                ))}

            </div>

        </div>
    );
}

export default DisplayGrid