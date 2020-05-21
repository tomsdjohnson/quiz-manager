using System;
using System.Collections.Generic;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using QuizManager.Data.Models;

namespace QuizManager.Provider
{
    public class TokenProvider
    {
        public string LoginUser(User user)
        {
            var key = Encoding.ASCII.GetBytes
                ("spuEu/_J=pGj]!;U~X&#YuaISEtzYyh,LWL{1rH,H!K5JsS~XXMx§d[?+g7HpP?i");

            var JWToken = new JwtSecurityToken(
                issuer: "https://localhost:44315/",
                audience: "https://localhost:44315/",
                claims: GetUserClaims(user),
                notBefore: new DateTimeOffset(DateTime.Now).DateTime,
                expires: new DateTimeOffset(DateTime.Now.AddDays(1)).DateTime,
                signingCredentials: new SigningCredentials(new SymmetricSecurityKey(key),
                    SecurityAlgorithms.HmacSha256Signature)
            );
            var token = new JwtSecurityTokenHandler().WriteToken(JWToken);
            return token;
        }

        private static IEnumerable<Claim> GetUserClaims(User user)
        {
            IEnumerable<Claim> claims = new Claim[]
            {
                new Claim("ACCESS_LEVEL", user.PermissionLevel.ToString())
            };
            return claims;
        }
    }
}