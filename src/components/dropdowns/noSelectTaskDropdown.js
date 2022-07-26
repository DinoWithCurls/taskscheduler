import React from 'react';

import items from '../../data/tasks.json';

import { MUIDropdown, MUIForm, MUIItem, MUILabel } from '../../utils/muiComponents';

const NoSelectDropdown = ({setResult}) => {
    return (
        <div>
            <MUIForm sx={{m:1, minWidth: 120}}>
                <MUIDropdown IconComponent={true} >
                    {
                        items.map((item, key) => {
                            return <MUIItem value={item.task} key={item.id}>{item.task}</MUIItem>
                        })
                    }
                </MUIDropdown>
            </MUIForm>
        </div>
    )
}

export default NoSelectDropdown;