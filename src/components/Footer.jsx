import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="packspacer">
                <div className="footerContent">
                    <p><strong>项目名称 / Project:</strong> <br />
                        炉石传说酒馆战棋图鉴 / Hearthstone Battlegrounds Hero Index</p><br />


                    <p>
                        <strong>版权声明 / Copyright Notice:</strong><br />
                        本项目仅用于学习、研究与个人兴趣用途，完全非商业性质。
                        <br />
                        页面中所涉及的所有图像、角色名称及相关内容均归暴雪娱乐（Blizzard Entertainment）所有，版权归原作者所有。
                        <br />This project is for personal learning, research, and hobby purposes only, with absolutely no commercial intent.
                        <br />All images, characters, and content related to Hearthstone are property of Blizzard Entertainment.
                    </p><br />

                    <p>
                        <strong>免责声明 / Disclaimer:</strong><br />
                        本网站与暴雪娱乐及其旗下公司无任何关联。
                        <br />如版权方认为本项目侵犯其权益，请联系下方邮箱，我们将立即配合处理与删除相关内容。
                        <br />This website is not affiliated with Blizzard Entertainment or its subsidiaries.
                        <br />  If any copyright holder believes this project infringes on their rights, please contact us via the email. We will promptly cooperate to remove the relevant content.
                    </p>
                </div>
            </div>



            <div className="trim">
                <div className='trimInner'>
                    <img className="trimIMG" style={{ marginLeft: "20px" }} src="/trimL1.png" alt="" />
                    <img className="InnerM trimIMG" src="/trimM.png" alt="" />
                    <img className="trimIMG" src="/trimL2.png" alt="" />
                    <div className='trimText'>
                        <span>📧 zhangzexiang626@gmail.com</span>
                    </div>

                    <img className="trimIMG" src="/trimR1.png" alt="" />
                    <img className="InnerM trimIMG" src="/trimM.png" alt="" />
                    <img className="trimIMG" style={{ marginRight: "20px" }} src="/trimR2.png" alt="" />
                </div>
            </div>
        </div>


    )
}

export default Footer