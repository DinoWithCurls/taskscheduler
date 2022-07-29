import React from 'react';

import options from '../../data/options.json';

import { MUIDropdown, MUIForm, MUIItem } from '../../utils/muiComponents';

const OptionDropdown = ({setResult}) => {
    const handleChange = (event) => {  setResult(event.target.value); }
    return (
        <div>
            <MUIForm sx={{m:1,minWidth: '100px',}}>
                <MUIDropdown onChange={handleChange} >
                    {
                        options.map((item, key) => {
                            return <MUIItem value={item.option} key={item.id}>{item.option}</MUIItem>
                        })
                    }
                </MUIDropdown>
            </MUIForm>
        </div>
    )
}

export default OptionDropdown;