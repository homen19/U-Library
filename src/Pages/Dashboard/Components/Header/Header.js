import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-12" style={{ height: '69px', backgroundColor: '#1266F1', padding: '20px 40px', textAlign:'left' }}>
                    <MenuIcon fontSize='large' style={{ color: '#fff' }} />
                </div>
            </div>

        </div>
    )
}
