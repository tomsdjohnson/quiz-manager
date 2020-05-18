using EnumStringValues;

namespace QuizManager.Data.Models
{
    public enum Permission
    {
        [StringValue("edit")]
        Edit = 1,
        [StringValue("view")]
        View = 2,
        [StringValue("restricted")]
        Restricted = 3
    }
}
