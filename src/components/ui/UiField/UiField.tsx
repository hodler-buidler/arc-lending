import React, { FC, ReactNode, useEffect, useRef } from 'react';
import { WrapperStyled, FieldWrapperStyled, FieldContainerStyled, FieldStyled } from './styleds/index';
import useValidateInput from './hooks/useValidateInput';

export interface UiFieldProps {
  value: string;
  children?: ReactNode;
  leftAdditions?: ReactNode;
  rightAdditions?: ReactNode;
  type?: 'text' | 'password';
  placeholder?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  invalid?: boolean;
  viewOnly?: boolean;
  numbersOnly?: boolean;
  minNumber?: number;
  maxNumber?: number;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (e: React.KeyboardEvent) => void,
};

const UiField: FC<UiFieldProps> = ({
  value,
  children,
  type = 'text',
  numbersOnly = false,
  minNumber = 0,
  maxNumber = 1000000000,
  onFocus = () => {},
  onBlur = () => {},
  onChange = (value: string) => {},
  onKeyDown = (e: React.KeyboardEvent) => {},
  ...props
}) => {
  const field = useRef<HTMLInputElement>(null);

  const validateInput = useValidateInput({
    numbersOnly,
    minNumber,
    maxNumber,
    onChange,
  });

  useEffect(() => {
    if (props.autoFocus) field.current?.focus();
  }, [props.autoFocus]);

  useEffect(() => {
    if (numbersOnly) validateInput(value);
  }, [numbersOnly])

  function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
    validateInput(e.currentTarget.value, (validValue) => {
      onChange(validValue);
    });
  }

  return (
    <WrapperStyled>
      { children && (
        <div className="field-label">
          { children }
        </div>
      )}

      <FieldWrapperStyled
        invalid={props.invalid}
        viewOnly={props.viewOnly}
        disabled={props.disabled}
      >
        <FieldContainerStyled>
          { props.leftAdditions && (
            <div className="left-additions">
              { props.leftAdditions }
            </div>
          )}

          <div>
            <FieldStyled
              ref={field}
              value={value}
              type={type}
              placeholder={props.placeholder}
              disabled={props.disabled || props.viewOnly}
              viewOnly={props.viewOnly}
              onFocus={onFocus}
              onBlur={onBlur}
              onChange={handleOnChange}
              onKeyDown={onKeyDown}
            />
          </div>

          { props.rightAdditions && (
            <div className="right-additions">
              { props.rightAdditions }
            </div>
          )}
        </FieldContainerStyled>
      </FieldWrapperStyled>
    </WrapperStyled>
  ); 
}

UiField.defaultProps = {
  type: 'text',
  placeholder: '',
  disabled: false,
  autoFocus: false,
  invalid: false,
  viewOnly: false,
  numbersOnly: false,
  minNumber: 0,
  maxNumber: 1000000000,
  onFocus: () => {},
  onBlur: () => {},
  onChange: (value: string) => {},
  onKeyDown: (e: React.KeyboardEvent) => {},
}

export default UiField;