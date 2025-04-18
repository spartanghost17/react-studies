export default function Tabs({
  children,
  buttons,
  ButtonsContainer = "menu", //custom container maybe for different parts of the application
  ...props
}) {
  //const ButtonsContainer = buttonsContainer; //react will look for value in buttonsContainer and either look for built in or custom component
  return (
    <>
      <ButtonsContainer {...props}>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
