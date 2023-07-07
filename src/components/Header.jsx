export default function Header(params) {
  const headertype = params.headertype;
  return (
    <div className="header" headertype={headertype}>
      {headertype}
    </div>
  );
}
