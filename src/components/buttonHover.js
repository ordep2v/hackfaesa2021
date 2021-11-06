import { useState } from 'react';
import { Smile } from 'react-feather';
export function ButtonHover(props) {
    const [openBox, setOpenBox] = useState(false)
    return (
        <div className='section-hover-step' onClick={(e) => setOpenBox(!openBox)}>
            <div className='section-hover-icon'><Smile size='2rem'/></div>
            <div className='section-hover-text'>
                <div className='section-hover-step-number'>1 passo</div>
                <div className='section-hover-step-title'>Blablablablabla</div>
                {!!openBox && (
                    <div className='section-hover-step-description'>aidshaiuehsauiehaiuheu</div>
                )}
            </div>
        </div>
    )
}