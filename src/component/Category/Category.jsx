import React from 'react'
import './Category.css'
import CategoryCard from './CategoryCard'
function Category() {
    return (
        <div>
            <div className="category-container">
                <div className="upper-container">
                    <div className="sub-upper-cont">

                        <div className="category-heading"><h2>Shop by Category</h2>
                        </div>
                        <div id="heading23"></div>
                    </div>

                     <div className="category-link"><a href="#">View All</a>
                    </div>
                </div>
                <div className="downward-container">
                    <div className="category-cards">
                        <CategoryCard title="Covid Essentials" subtitle="Upto 70%" pic="./Images/mask.png" />
                    </div>
                    <div className="category-cards">
                        <CategoryCard title="Women care" subtitle="Upto 50%" pic="./Images/whisper.png" />
                    </div>
                    <div className="category-cards">
                        <CategoryCard title="Baby & Mom Care" subtitle="Upto 60%" pic="./Images/jonhsons.png" />
                    </div>
                    <div className="category-cards">
                        <CategoryCard title="Devices" subtitle="Upto 50%" pic="./Images/mixer.png" />
                    </div>
                    <div className="category-cards">
                        <CategoryCard title="Ayurvedic care" subtitle="Upto 30%" pic="./Images/ayurvedic.png" />
                    </div>
                    <div className="category-cards">
                        <CategoryCard title="Diabetic Care" subtitle="Upto 60%" pic="./Images/onetouch.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
