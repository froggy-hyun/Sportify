package com.tuk.sportify.crewapplicant.exception;

import com.tuk.sportify.global.exception.ResourceNotFoundException;
import com.tuk.sportify.global.status_code.ErrorCode;

public class CrewApplicantNotFound extends ResourceNotFoundException {

    public CrewApplicantNotFound(final ErrorCode errorCode) {
        super(errorCode);
    }
}
