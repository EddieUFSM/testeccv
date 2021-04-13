import React, { useState } from "react";
import PropTypes from "prop-types";
import MaskedInput from "react-text-mask";
import NumberFormat from "react-number-format";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import { FormControl, FormHelperText } from "@material-ui/core"


const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            paddingTop: 16, paddingBottom: 8
        },
    },
}));

function TextMaskCustom(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={[
                "(",
                /[1-9]/,
                /\d/,
                ")",
                " ",
                /\d/,
                " ",
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
                /\d/,
                /\d/
            ]}
            placeholderChar={"\u2000"}
            showMask
        />
    );
}

TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired
};

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

export default function InputCellphone(props) {
    const classes = useStyles();
    console.log(props.errorCellphone)
    return (
        <div className={classes.root}>
            <FormControl
                variant="outlined"
                required
                fullWidth
            >
                <InputLabel style={{ paddingTop: 16, paddingBottom: 8 }} >Celular</InputLabel>
                <OutlinedInput
                    autoComplete="Cellphone"
                    value={props.textmaskCellphone}
                    onChange={props.handleChange}
                    name="textmaskCellphone"
                    id="formatted-text-mask-input"
                    inputComponent={TextMaskCustom}
                    label="Celular"
                    error={props.errorCellphone.value}
                />
                {props.errorCellphone.value ? <FormHelperText id="companyName" error={true}>{props.errorCellphone.message}</FormHelperText> : null}
            </FormControl>
        </div>
    );
}
