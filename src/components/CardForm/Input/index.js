import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core'
import { FiInfo } from 'react-icons/fi'

import { InputStyle, Container, Info} from './styles'

const Input = ({name, info, hasInfo, ...rest}) => {
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
    <Container>
      <InputStyle
      isFilled = {isFilled}
      onBlur={handleInputBlur}
      ref={inputRef}
      type="text"
      {...rest}
      />
      {hasInfo &&
      <Info>
      <FiInfo size={30}/>
      <span>{info}</span>
      </Info>
      }
    </Container>
  );
}

export default Input;