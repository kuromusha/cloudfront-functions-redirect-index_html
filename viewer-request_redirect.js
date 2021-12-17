// Copyright (C) 2021  Ken'ichi Kuromusha
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

function handler(event) {
    var request = event.request;
    var uri = request.uri;
    var regex = /\/$/;
    if (regex.test(uri)) {
        request.uri = uri.replace(regex, '\/index.html');
    } else {
        regex = /\/index.html$/;
        if (regex.test(uri)) {
            var response = {
                statusCode: 301,
                statusDescription: 'Found',
                headers: {"location": {"value": uri.replace(regex, '/')}}
            }
            return response;
        }
    }
    return request;
}
