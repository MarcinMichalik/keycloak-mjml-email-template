import emailTest from '../email/html/email-test.mjml';
import emailUpdateConfirmation from '../email/html/email-update-confirmation.mjml';
import emailVerificationWithCode from '../email/html/email-verification-with-code.mjml';
import emailVerification from '../email/html/email-verification.mjml';
import eventLoginError from '../email/html/event-login_error.mjml';
import eventRemoveCredential from '../email/html/event-remove_credential.mjml';
import eventRemoveTOTP from '../email/html/event-remove_totp.mjml';
import eventUpdateCredential from '../email/html/event-update_credential.mjml';
import eventUpdatePassword from '../email/html/event-update_password.mjml';
import eventUpdateTOTP from '../email/html/event-update_totp.mjml';
import eventUserDisabledByPermanentLockout from '../email/html/event-user_disabled_by_permanent_lockout.mjml';
import eventUserDisabledByTemporaryLockout from '../email/html/event-user_disabled_by_temporary_lockout.mjml';
import executeActions from '../email/html/executeActions.mjml';
import identityProviderLink from '../email/html/identity-provider-link.mjml';
import orgInvite from '../email/html/org-invite.mjml';
import passwordReset from '../email/html/password-reset.mjml';

import {eventGetDetail, linkExpirationFormatter} from '../freemarker';
import {renderHTMLEmail} from '../render';

export default {
    title: 'Emails/HTML',
    parameters: {
        locale: 'en'
    },
    loaders: [
        async ({parameters}: any) => {
            const {locale} = parameters;
            const i18n = await import(`../email/messages/${locale}.json`).then(m => m.default);
            return {
                i18n
            };
        }
    ]
};

export const EmailTest = renderHTMLEmail(emailTest, {
    emailTestBody: 'MyContext'
});

export const EmailUpdateConfirmation = renderHTMLEmail(emailUpdateConfirmation, {
    link: 'https://keycloak.org',
    newEmail: 'new-email@example.com',
    linkExpiration: 48,
    realmName: 'kuplo',
    linkExpirationFormatter: linkExpirationFormatter
});


export const EmailVerification = renderHTMLEmail(emailVerification, {
    link: 'https://keycloak.org',
    linkExpiration: 48,
    realmName: 'kuplo',
    linkExpirationFormatter: linkExpirationFormatter
});

export const EmailVerificationWithCode = renderHTMLEmail(emailVerificationWithCode, {
    code: '2342354'
});

export const EventLoginError = renderHTMLEmail(eventLoginError, {
    event: {
        date: '1.01.2001',
        ipAddress: '127.0.0.1'
    }
});

export const EventRemoveCredential = renderHTMLEmail(eventRemoveCredential, {
    event: {
        getDetail: eventGetDetail,
        date: '1.01.2001',
        ipAddress: '127.0.0.1'
    }
});

export const EventRemoveTOTP = renderHTMLEmail(eventRemoveTOTP, {
    event: {
        date: '1.01.2001',
        ipAddress: '127.0.0.1'
    }
});

export const EventUpdateCredential = renderHTMLEmail(eventUpdateCredential, {
    event: {
        getDetail: eventGetDetail,
        date: '1.01.2001',
        ipAddress: '127.0.0.1'
    }
});


export const EventUpdatePassword = renderHTMLEmail(eventUpdatePassword, {
    event: {
        date: '1.01.2001',
        ipAddress: '127.0.0.1'
    }
});

export const EventUpdateTOTP = renderHTMLEmail(eventUpdateTOTP, {
    event: {
        date: '1.01.2001',
        ipAddress: '127.0.0.1'
    }
});

export const EventUserDisabledByPermanentLockout = renderHTMLEmail(eventUserDisabledByPermanentLockout, {
    event: {
        date: '1.01.2001',
    }
});

export const EventUserDisabledByTemporaryLockout = renderHTMLEmail(eventUserDisabledByTemporaryLockout, {
    event: {
        date: '1.01.2001',
    }
})

export const ExecuteActions = renderHTMLEmail(executeActions, {
    realmName: 'Kuplo',
    link: 'https://keycloak.org',
    linkExpiration: 48,
    linkExpirationFormatter: linkExpirationFormatter
});

export const IdentityProviderLink = renderHTMLEmail(identityProviderLink, {
    identityProviderDisplayName: 'Facebook',
    realmName: 'Kuplo',
    identityProviderContext: {
        username: 'text@example.com'
    },
    link: 'https://keycloak.org',
    linkExpiration: 48,
    linkExpirationFormatter: linkExpirationFormatter
});

export const OrgInvite = renderHTMLEmail(orgInvite, {
    realmName: 'Kuplo',
    organization: {
        name: 'MyOrg'
    },
    link: 'https://keycloak.org',
    linkExpiration: 48,
    linkExpirationFormatter: linkExpirationFormatter
});

export const PasswordReset = renderHTMLEmail(passwordReset, {
    realmName: 'Kuplo',
    link: 'https://keycloak.org',
    linkExpiration: 48,
    linkExpirationFormatter: linkExpirationFormatter
});


