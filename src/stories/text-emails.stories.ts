import {eventGetDetail, linkExpirationFormatter} from '../freemarker';
import {renderTextEmail} from '../render';
import emailTest from '../email/text/email-test.txt';
import emailUpdateConfirmation from '../email/text/email-update-confirmation.txt';
import emailVerification from '../email/text/email-verification.txt';
import emailVerificationWithCode from '../email/text/email-verification-with-code.txt';
import eventLoginError from '../email/text/event-login_error.txt';
import eventRemoveCredential from '../email/text/event-remove_credential.txt';
import eventRemoveTOTP from '../email/text/event-remove_totp.txt';
import eventUpdateCredential from '../email/text/event-update_credential.txt';
import eventUpdatePassword from '../email/text/event-update_password.txt';
import eventUpdateTOTP from '../email/text/event-update_totp.txt';
import eventUserDisabledByPermanentLockout from '../email/text/event-user_disabled_by_permanent_lockout.txt';
import eventUserDisabledByTemporaryLockout from '../email/text/event-user_disabled_by_temporary_lockout.txt';
import executeActions from '../email/text/executeActions.txt';
import identityProviderLink from '../email/text/identity-provider-link.txt';
import orgInvite from '../email/text/org-invite.txt';
import passwordReset from '../email/text/password-reset.txt';

export default {
    title: 'Emails/Text',
    parameters: {
        locale: 'en'
    },
    loaders: [
        async ({ parameters }: any) => {
            const { locale } = parameters;
            const i18n = await import(`../email/messages/${locale}.json`).then(m => m.default);
            return {
                i18n
            };
        }
    ]
};

export const EmailTest = renderTextEmail(emailTest, {});

export const EmailUpdateConfirmation = renderTextEmail(emailUpdateConfirmation, {
    link: 'https://keycloak.org',
    newEmail: 'new-email@example.com',
    linkExpiration: 48,
    realmName: 'kuplo',
    linkExpirationFormatter: linkExpirationFormatter
});

export const EmailVerification = renderTextEmail(emailVerification, {
    link: 'https://keycloak.org',
    linkExpiration: 48,
    realmName: 'kuplo',
    linkExpirationFormatter: linkExpirationFormatter
});

export const EmailVerificationWithCode = renderTextEmail(emailVerificationWithCode, {
    code: '2342354'
});

export const EventLoginError = renderTextEmail(eventLoginError, {
    event: {
        date: '1.01.2001',
        ipAddress: '127.0.0.1'
    }
});

export const EventRemoveCredential = renderTextEmail(eventRemoveCredential, {
    event: {
        getDetail: eventGetDetail,
        date: '1.01.2001',
        ipAddress: '127.0.0.1'
    }
});

export const EventRemoveTOTP = renderTextEmail(eventRemoveTOTP, {
    event: {
        date: '1.01.2001',
        ipAddress: '127.0.0.1'
    }
});

export const EventUpdateCredential = renderTextEmail(eventUpdateCredential, {
    event: {
        getDetail: eventGetDetail,
        date: '1.01.2001',
        ipAddress: '127.0.0.1'
    }
});


export const EventUpdatePassword = renderTextEmail(eventUpdatePassword, {
    event: {
        date: '1.01.2001',
        ipAddress: '127.0.0.1'
    }
});

export const EventUpdateTOTP = renderTextEmail(eventUpdateTOTP, {
    event: {
        date: '1.01.2001',
        ipAddress: '127.0.0.1'
    }
});

export const EventUserDisabledByPermanentLockout = renderTextEmail(eventUserDisabledByPermanentLockout, {
    event: {
        date: '1.01.2001',
    }
});

export const EventUserDisabledByTemporaryLockout = renderTextEmail(eventUserDisabledByTemporaryLockout, {
    event: {
        date: '1.01.2001',
    }
})

export const ExecuteActions = renderTextEmail(executeActions, {
    realmName: 'Kuplo',
    link: 'https://keycloak.org',
    linkExpiration: 48,
    linkExpirationFormatter: linkExpirationFormatter
});

export const IdentityProviderLink = renderTextEmail(identityProviderLink, {
    identityProviderDisplayName: 'Facebook',
    realmName: 'Kuplo',
    identityProviderContext: {
        username: 'text@example.com'
    },
    link: 'https://keycloak.org',
    linkExpiration: 48,
    linkExpirationFormatter: linkExpirationFormatter
});

export const OrgInvite = renderTextEmail(orgInvite, {
    realmName: 'Kuplo',
    organization: {
        name: 'MyOrg'
    },
    link: 'https://keycloak.org',
    linkExpiration: 48,
    linkExpirationFormatter: linkExpirationFormatter
});

export const PasswordReset = renderTextEmail(passwordReset, {
    realmName: 'Kuplo',
    link: 'https://keycloak.org',
    linkExpiration: 48,
    linkExpirationFormatter: linkExpirationFormatter
});
