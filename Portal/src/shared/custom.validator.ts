import { FormGroup } from '@angular/forms';
export function ValidateGreaterThanDate(fromDtControlName: string, toDtControlName: string) {
    return (formGroup: FormGroup) => {
        const dtFrom = formGroup.controls[fromDtControlName];
        const dtTo = formGroup.controls[toDtControlName];

        if(dtFrom.value == null || dtTo.value == null ||
            dtFrom.value == undefined || dtTo.value == undefined ||
            dtFrom.value == '' || dtTo.value == '') {
                return;
            }
            else{
                let fromDt:Date = new Date(dtFrom.value);
                let toDt:Date = new Date(dtTo.value);
                fromDt.setHours(0,0,0,0);
                toDt.setHours(0,0,0,0);
                dtTo.setErrors({ valid: false });
                if (toDt <= fromDt) {
                    dtTo.setErrors({ valid: true });
                } else {
                    dtTo.setErrors(null);
                }
        }
        
    }
}

export function DependentRequired(parentControl: string, childControl: string) {
    return (formGroup: FormGroup) => {
        const pControl = formGroup.controls[parentControl];
        const cControl = formGroup.controls[childControl];
        if(cControl.errors){
            return;
        }
        if(pControl.value != null && pControl.value != undefined && pControl.value != '' ) {
            if(cControl.value == null || cControl.value == undefined || cControl.value == '' ){
                cControl.setErrors({isEmpty:true});
            }else{
                cControl.setErrors(null);
            }
        }else{
            cControl.setErrors(null);
        }
    }
}
