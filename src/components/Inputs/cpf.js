
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import MaskedInput from "react-text-mask";
import NumberFormat from "react-number-format";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import { FormHelperText, FormControl } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            paddingTop: 16, paddingBottom: 8

        },
    },

}))

function TextMaskCustom(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={[
                /\d/,
                /\d/,
                /\d/,
                ".",
                /\d/,
                /\d/,
                /\d/,
                ".",
                /\d/,
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
            ]}
            placeholderChar={"\u2000"}
            showMask
        />
    );
}

TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired
}

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value
                    }
                });
            }}
            thousandSeparator
            isNumericString
            prefix="$"
        />
    );
}

NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default function InputCPF(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <FormControl
                variant="outlined"
                required
                fullWidth
            >
                <InputLabel style={{ paddingTop: 16, paddingBottom: 8 }}>CPF</InputLabel>
                <OutlinedInput
                    autoComplete="CPF"
                    value={props.textmaskCPF}
                    onChange={props.handleChange}
                    name="textmaskCPF"
                    id="formatted-text-mask-input"
                    inputComponent={TextMaskCustom}
                    label="CPF"
                    error={props.errorCPF.value}
                />
                {props.errorCPF.value ? <FormHelperText id="email" error={true}>{props.errorCPF.message}</FormHelperText> : null}
            </FormControl>
        </div>
    );
}
