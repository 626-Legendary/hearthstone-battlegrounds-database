import React from 'react'
import './NavBar.css'
const NavBar = () => {
    return (
        <>
        <div className="nav">
            <ul>
                <li><a href="">英雄</a></li>
                <li><a href="">随从</a></li>
                <li><a href="">奖励</a></li>
                <li><a href="">酒馆法术</a></li>
                <li><a href="">畸变</a></li>
                <li><a href="">饰品</a></li>
                <li><a href="">伙伴</a></li>
                
            </ul>
        </div>
        <div className="version">
            <p>版本：33.2.0.225406</p>
            <p>最后更新时间：2025-08-05 17:35:28</p>
        </div>
            
        </>

    )
}

export default NavBar