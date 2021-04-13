import React from 'react';

import { TextField, FormHelperText, FormControl } from '@material-ui/core';

export default function InputEmail(props) {
    return (
        <FormControl fullWidth>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                value={props.email}
                label="Email"
                name="email"
                onChange={props.handleChange}
                autoComplete="email"
                autoFocus
                error={props.errorEmail.value}
            />
            {props.errorEmail.value ? <FormHelperText id="email" error={true}>{props.errorEmail.message}</FormHelperText> : null}
        </FormControl>
    )

}
