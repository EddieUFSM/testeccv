
import React, { Fragment, useEffect, useState } from 'react';
import { Typography, TextField, FormHelperText, FormControl, IconButton, Input, Button, Link, FormControlLabel, Checkbox } from '@material-ui/core';


export default function InputName(props) {
    return (
        <FormControl fullWidth>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Nome"
                name="name"
                onChange={props.handleChange}
                autoComplete="name"
                autoFocus
            />

        </FormControl>
    )
}
