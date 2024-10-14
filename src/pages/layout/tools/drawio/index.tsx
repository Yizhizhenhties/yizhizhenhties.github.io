import { DrawIoEmbed } from "react-drawio";

export default function Drawio() {
    return (
        <div className="bg-white w-full h-full p-4">
            <DrawIoEmbed
                urlParameters={{
                    noExitBtn: true,
                    noSaveBtn: true,
                    saveAndExit: false
                }}
            />        
        </div>
    )
}