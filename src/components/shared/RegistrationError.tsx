interface IRegistrationErrorProps{
error?:{
    type: string,
    message: string
}|undefined
}

const RegistrationError:React.FC<IRegistrationErrorProps> = ({error}) => {
    if(!error?.type) return null;
    else{
        return <p className="error_text">{error?.message}</p>
    }
  
}

export default RegistrationError;
