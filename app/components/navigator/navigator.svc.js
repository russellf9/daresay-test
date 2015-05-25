// the Service for the Navigator

// A service responsible for return information on the Client's navigator object
(function() {

    'use strict';

    angular.module('daresay-app.navigator', []).service('NavigatorService', function($window) {

            // will match all the current types of mobile device
            var regExp = /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i;

            return {
                isMobile: function() {
                    return Boolean($window.navigator.userAgent.match(regExp));
                },
                isDesktop: function() {
                    return !Boolean($window.navigator.userAgent.match(regExp));
                }
            };
        }
    );
})();

