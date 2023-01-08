import React from "react";
import PropTypes from 'prop-types'

import { Button, ButtonWrapper } from "./Button.styled";

export const ButtonLoadMore = ({ onClickLoadMore }) => {
    return (
        <ButtonWrapper>
            <Button type="button" onClick={onClickLoadMore}>Load more</Button>
        </ButtonWrapper>
    )
}

ButtonLoadMore.propTypes = {
    onClickLoadMore: PropTypes.func.isRequired,
}