import React, { useCallback, useEffect, useRef, useState } from 'react';
import {useField} from '@unform/core'

import {InputStyle} from './styles'

const Input = ({name, ...rest}) => {
  const {fieldName, registerField, defaultValue, error} = useField(name);
  const [isFilled, setIsFilled] = useState(false);

  const inputRef = useRef();

  const handleInputBlur = useCallback(() => {
    setIsFilled(!!inputRef.current?.value);
  }, [])

  useEffect(()=> {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  },[fieldName, registerField])
  return(
    <InputStyle
    isFilled = {isFilled}
    onBlur={handleInputBlur}
    ref={inputRef}
    type="text"
    {...rest}
    />
  );
}

export default Input;