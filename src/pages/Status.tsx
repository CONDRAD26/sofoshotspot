import { useLocation } from "react-router-dom";

const Status = () => {
    const params = new URLSearchParams(useLocation().search);
    const result = params.get("result");

    return (
        <div className="container">
            {result === "success" ? (
                <>
                    <h2>Payment Successful</h2>
                    <p>Your internet access is now active.</p>
                    <p><strong>Voucher:</strong> 8432-ABCD</p>
                </>
            ) : (
                <>
                    <h2>Payment Failed</h2>
                    <p>Please try again.</p>
                </>
            )}
        </div>
    );
};

export default Status;
