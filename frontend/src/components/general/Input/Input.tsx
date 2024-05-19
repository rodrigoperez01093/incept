import React, { useEffect } from 'react'

interface StammInputProps {
  multi?: boolean
  labelText: string
  widths?: string
  type?: string
  value?: any
  onChange?: any
  placeholder?: string
  disabled?: boolean
  styles?: string
  readOnly?: boolean
}

const Input: React.FC<StammInputProps> = ({
  labelText = 'type title',
  widths = 'w-full',
  type = 'text',
  value,
  onChange,
  placeholder = '',
  disabled = false,
  multi = true,
  styles = '',
  readOnly = false
}) => {
  useEffect(() => {
    document?.addEventListener('wheel', function (event) {
      const activeElement = document?.activeElement as HTMLInputElement
      if (activeElement.type === 'number') {
        activeElement.blur?.()
      }
    })
  }, [])

  return (
    <div className={`flex flex-col ${multi ? 'lg:first:ml-0 lg:last:mr-0 mx-0 lg:mx-2' : 'mx-0'} ${readOnly && 'border-b border-b-stamm-gray'} mt-4 lg:mt-0 ${widths} ${styles}`}>
        <label className={`font-semibold mb-1 ${disabled && 'text-stamm-gray'}`}>{labelText}</label>
        {readOnly
          ? <span className='h-10 leading-10 text-sm px-4 align-bottom'>{value}</span>
          : <input
              type={type}
              className={`no-arrows h-10 w-full border ${value !== undefined && value.toString() !== '' ? 'border-stamm-primary' : 'border-stamm-gray'} rounded-[20px] bg-transparent px-4 text-sm`}
              value={value}
              disabled={disabled}
              onChange={(e) => { onChange(e) }}
              placeholder={placeholder}
          />
        }
    </div>
  )
}

export default Input