package com.tuk.sportify.member.principle;

import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.Collection;

@Getter
public class UserPrinciple extends User{
    private static final String PASSWORD_ERASED_VALUE = "[PASSWORD_ERASED]";
    final String email;
    final Long memberId;

    public UserPrinciple(String email, String username, Collection<? extends GrantedAuthority> authorities, Long memberId) {
        super(username, PASSWORD_ERASED_VALUE, authorities);
        this.email = email;
        this.memberId = memberId;
    }

    @Override
    public String toString() {
        return "UserPrinciple(" +
                "email=" + email +
                " username=" + getUsername() +
                " role=" + getAuthorities() +
                ')';
    }
}
