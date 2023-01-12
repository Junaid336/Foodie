import React, {useState} from "react";
import Link from "next/link";

const Search = ({onClick, btnTxt='Search Food'}) => {
    const [value, setValue] = useState('')
    return (
        <form className="form-inline">
            <div className="form-group">
                <label className="sr-only">
                    I would like to eat....
                </label>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="I would like to eat...."
                        value={value}
                        onChange={(e)=>setValue(e.target.value)}
                    />{" "}
                </div>
            </div>
            <Link href='/SearchResutls'>
            <button
                onClick={onClick}
                type="button"
                className="btn theme-btn btn-lg"
            >
                {btnTxt}
            </button>
            </Link>
        </form>
    );
}

export default Search;