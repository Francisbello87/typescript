type InputProps = React.ComponentProps<"input">;

export default function CustomInput(props: InputProps) {
  return (
    <div>
      <input {...props} />
    </div>
  );
}
