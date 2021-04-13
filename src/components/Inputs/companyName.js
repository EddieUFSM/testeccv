import React, { Fragment, useEffect, useState } from 'react';
import { Typography, TextField, FormHelperText, FormControl, IconButton, Input, Button, Link, FormControlLabel, Checkbox } from '@material-ui/core';


export default function InputCompanyName(props) {
    return (
        <FormControl fullWidth>
            <TextField

                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="companyName"
                label="Razão Social"
                name="companyName"
                onChange={props.handleChange}
                autoComplete="companyName"
                autoFocus
            />

        </FormControl>
    )
}
