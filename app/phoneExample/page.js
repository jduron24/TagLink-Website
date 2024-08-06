import Link from 'next/link';
import './page.css'

export default function PhoneExample(){
    return(
        <div className='mainContainer'>
            <div className='title'>
                <h1>Repair Order</h1>
            </div>

            <div className='rowOfInput'>
                <div className='inputContainer'>
                    <div className='field'>
                        <p>Make</p>
                    </div>
                    <div className='input'>
                        <p>Honda</p>
                    </div>
                </div>

                <div className='inputContainer'>
                    <div className='field'>
                        <p>Model</p>
                    </div>
                    <div className='input'>
                        <p>Accord</p>
                    </div>
                </div>
            </div>

            <div className='rowOfInput'>
                <div className='inputContainer'>
                    <div className='field'>
                        <p>Year</p>
                    </div>
                    <div className='input'>
                        <p>2018</p>
                    </div>
                </div>

                <div className='inputContainer'>
                    <div className='field'>
                        <p>Price</p>
                    </div>
                    <div className='input'>
                        <p>$20,590</p>
                    </div>
                </div>
            </div>

            <div className='rowOfInput'>
                <div className='inputContainer'>
                    <div className='field'>
                        <p>Color</p>
                    </div>
                    <div className='input'>
                        <p>White</p>
                    </div>
                </div>

                <div className='inputContainer'>
                    <div className='field'>
                        <p>Dealer</p>
                    </div>
                    <div className='input'>
                        <p>N/A</p>
                    </div>
                </div>
            </div>


            <div className='rowOfInput'>
                <div className='inputContainer'>
                    <div className='field'>
                        <p>Last 6 of Vin</p>
                    </div>
                    <div className='input'>
                        <p>123456</p>
                    </div>
                </div>

                <div className='inputContainer'>
                    <div className='field'>
                        <p>Dealer Name</p>
                    </div>
                    <div className='input'>
                        <p>N/A</p>
                    </div>
                </div>
            </div>
            
            <div className='rowOfInput'>
                <div className='inputContainer'>
                    <div className='field'>
                        <p>Phone #</p>
                    </div>
                    <div className='input'>
                        <p>123 456 7890</p>
                    </div>
                </div>
            </div>

            <div className='YesNoContainer'>
                <div className='string'>
                    <p>Yes &emsp; &emsp; &emsp; No</p> 
                    
                </div>
            </div>

            <div className='checkBoxes'>
                <div className='fieldContainer'>
                    <p className='fieldName'>Gasoline</p>
                    <p className='checkBox'>&#9745; &emsp; &emsp; &#9744;</p>
                </div>
                
                <div className='fieldContainer'>
                    <p className='fieldName'>Oil Change</p>
                    <p className='checkBox'>&#9745; &emsp; &emsp; &#9744;</p>
                </div>

                <div className='fieldContainer'>
                    <p className='fieldName'>Tires</p>
                    <p className='checkBox'>&#9744; &emsp; &emsp; &#9744;</p>
                </div>
                
                <div className='fieldContainer'>
                    <p className='fieldName'>Windshield</p>
                    <p className='checkBox'>&#9744; &emsp; &emsp; &#9745;</p>
                </div>

                <div className='fieldContainer'>
                    <p className='fieldName'>Breaks</p>
                    <p className='checkBox'>&#9744; &emsp; &emsp; &#9745;</p>
                </div>

                <div className='fieldContainer'>
                    <p className='fieldName'>Engine Light</p>
                    <p className='checkBox'>&#9744; &emsp; &emsp; &#9744;</p>
                </div>

                <div className='fieldContainer'>
                    <p className='fieldName'>ABS Light</p>
                    <p className='checkBox'>&#9744; &emsp; &emsp; &#9744;</p>
                </div>

                <div className='fieldContainer'>
                    <p className='fieldName'>Air Bag Light</p>
                    <p className='checkBox'>&#9745; &emsp; &emsp; &#9744;</p>
                </div>
            </div>

            <div className='notesContainer'>
                <div className='stringContainer'>
                     <p className='string'>Notes:&emsp;</p>
                </div>
                <div className='notesBox'>
                    <p> This is a good car that doesnt need much work. Just an oil change.</p>
                </div>
            </div>


        </div>
    )
}