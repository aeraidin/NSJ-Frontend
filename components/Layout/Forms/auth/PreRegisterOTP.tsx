import React, { useEffect, useState } from 'react'

import CountdownTimer from '../../CountDown/CountDownTimer';
import PrimaryBtn from '../../Buttons/PrimaryBtn';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';

import Toast from '../../Alerts/Toast';
import { VerifyManager } from '@/util/api/contribution/Verify';
import OTPCode from '../../OTPCode/OTPCode';
function PreRegisterOTP({ CloseModal, phone, nationalCode }: { CloseModal: () => void, phone: string, nationalCode: string }) {
    const [code, setCode] = useState<string>("");
    const router = useRouter();
    const [reset, setReset] = useState(false);
    const [Result, setResult] = useState(false);
    useEffect(() => {
        if (reset) {
            setReset(false);
        }
    }, [reset]);
    const Verify = useMutation({
        mutationFn: VerifyManager,
        onSuccess(data, variables, context) {
            router.replace("/dashboard")
        },
        onError(error, variables, context) {
            CloseModal()
            setResult(true)
        },
    });
    useEffect(() => {
        if (code.length === 5) {
            Verify.mutate({ phone, code, nationalCode });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [code]);
    return (
        <>
            <Toast Result={Result} Close={() => setResult(false)} isError messege={Verify.error?.message} />
            <div className="flex flex-col gap-8">
                <OTPCode
                    //   error={LoginOtp.isError}
                    otpCode={(e) => setCode(e)}
                    length={5}
                />
                <PrimaryBtn
                    type="submit"
                    onClick={() => {
                        Verify.mutate({ code, phone, nationalCode });
                    }}
                    isloading={Verify.isPending}
                    disabled={
                        code?.length < 5 || Verify.isPending
                    }
                >
                    تایید
                </PrimaryBtn>
            </div>

        </>
    )
}

export default PreRegisterOTP