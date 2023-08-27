interface CardProps {
  parentClass?: string;
  title?: string;
  children?: JSX.Element | string;
}

const Card = (props: CardProps) => {
  return (
    <>
      <div className={`${props.parentClass ? props.parentClass : ''}`}>
        <div className="bg-primaryRed/[0.03] rounded-10">
          {props.title &&
            <>
              <div className="card-header px-6 pt-4 pb-18px relative rounded-t-10 before:absolute before:content-[''] before:max-w-[calc(100%_-_48px)] before:left-0 before:right-0 before:mx-auto before:h-px before:bottom-0 before:bg-black/10">
                <h5 className="text-xl/6 font-semibold">{props.title}</h5>
              </div>
            </>
          }
          <div className="card-body px-6 pb-7 pt-4 rounded-b-10">
            {props.children}
          </div>
        </div>
      </div >
    </>
  )
}

export default Card