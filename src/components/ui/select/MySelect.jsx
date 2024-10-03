export const MySelect = ({options, defaultValue}) => {
    return (
        <select>
            <option disabled value="">{defaultValue}</option>
            {options.map(option => 
                <option value={option.value}>
                    {option.name}
                </option>
            )}
        </select>   
    )
}